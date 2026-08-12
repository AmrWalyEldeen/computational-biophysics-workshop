@echo off
setlocal enabledelayedexpansion

REM ============================================================
REM AutoDock Vina Log Parser - DOS Batch Version
REM Extracts docking affinities from .log files and saves to CSV
REM ============================================================

set "sortfile=%temp%\vina_sort_%random%.txt"
if exist "%sortfile%" del "%sortfile%"

echo Processing .log files...

REM Process each .log file in current directory
for %%F in (*.log) do (
    set "filename=%%~nF"
    set "affinities="
    set "first_aff="

    REM Read the log file and extract affinity values
    for /f "tokens=1,2* delims= " %%A in ('type "%%F"') do (
        REM Check if first token is a single digit (mode number 1-9)
        set "token=%%A"
        if "!token!"=="1" (
            set "first_aff=%%B"
            set "affinities=%%B"
        )
        if "!token!"=="2" set "affinities=!affinities!,%%B"
        if "!token!"=="3" set "affinities=!affinities!,%%B"
        if "!token!"=="4" set "affinities=!affinities!,%%B"
        if "!token!"=="5" set "affinities=!affinities!,%%B"
        if "!token!"=="6" set "affinities=!affinities!,%%B"
        if "!token!"=="7" set "affinities=!affinities!,%%B"
        if "!token!"=="8" set "affinities=!affinities!,%%B"
        if "!token!"=="9" set "affinities=!affinities!,%%B"
    )

    REM Write to sort file: first_affinity|filename|all_affinities
    if not "!first_aff!"=="" (
        echo !first_aff!^|!filename!^|!affinities!>>"%sortfile%"
        echo   Processed: %%F
    )
)

REM Sort the file by first affinity (alphabetic sort works for negative numbers)
sort "%sortfile%" /o "%sortfile%"

REM Create the CSV output
echo.
echo Creating summary.csv...

(
    for /f "usebackq tokens=1,2,3 delims=|" %%A in ("%sortfile%") do (
        set "name=%%B"
        set "affs=%%C"
        echo !name!,!affs!
    )
) > summary.csv

REM Cleanup
if exist "%sortfile%" del "%sortfile%"

echo.
echo ============================================================
echo Parsing data finished
echo Results saved to summary.csv
echo ============================================================

endlocal
