from rdkit import Chem
from rdkit.Chem.MolStandardize import rdMolStandardize

def get_charge_tag(mol):
    """
    Counts positive and negative formal charges on all atoms in the molecule 
    and constructs a charge tag repeating POS or NEG according to count.
    """
    pos_count = sum(1 for atom in mol.GetAtoms() if atom.GetFormalCharge() > 0)
    neg_count = sum(1 for atom in mol.GetAtoms() if atom.GetFormalCharge() < 0)

    tags = []
    
    # Append POS for each positive charge
    if pos_count > 0:
        tags.extend(["POS"] * pos_count)
        
    # Append NEG for each negative charge
    if neg_count > 0:
        tags.extend(["NEG"] * neg_count)

    # Join with underscores, or return NEU if no formal charges exist
    if tags:
        return "_".join(tags)
    return "NEU"


def process_protonated_smiles(
    original_file="compounds.smiles",
    protonated_file="compounds_ph.smiles",
    output_file="compounds_ph_named.smiles"
):
    uncharger = rdMolStandardize.Uncharger()
    name_map = {}

    # 1. Read original SMILES file and map uncharged canonical SMILES to compound names
    with open(original_file, "r") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            parts = line.split(None, 1)
            smiles = parts[0]
            name = parts[1] if len(parts) > 1 else "UNNAMED"

            mol = Chem.MolFromSmiles(smiles)
            if mol:
                uncharged_mol = uncharger.uncharge(mol)
                can_smiles = Chem.MolToSmiles(uncharged_mol)
                name_map[can_smiles] = name

    # 2. Process protonated file, count charges, and match with parent compound
    output_lines = []
    with open(protonated_file, "r") as f:
        for line in f:
            ph_smiles = line.strip()
            if not ph_smiles:
                continue

            mol = Chem.MolFromSmiles(ph_smiles)
            if mol is None:
                continue

            # Determine charge tag based on charge counts
            charge_tag = get_charge_tag(mol)

            # Map back to parent compound
            uncharged_mol = uncharger.uncharge(mol)
            can_smiles = Chem.MolToSmiles(uncharged_mol)
            comp_name = name_map.get(can_smiles, "UNKNOWN")

            # Append compound name and charge tag
            full_name = f"{comp_name}_{charge_tag}"
            output_lines.append(f"{ph_smiles}\t{full_name}")

    # 3. Save output to file
    with open(output_file, "w") as f:
        f.write("\n".join(output_lines) + "\n")

    print(f"Successfully processed {len(output_lines)} structures -> {output_file}")

if __name__ == "__main__":
    process_protonated_smiles()