#!/bin/bash

# SL Voice ID - Conda Environment Setup Script
# This script creates and configures the Conda environment for the project

set -e  # Exit on error

echo "=========================================="
echo "SL Voice ID - Environment Setup"
echo "=========================================="
echo ""

# Check if conda is available
if ! command -v conda &> /dev/null; then
    echo "❌ Error: Conda is not installed or not in PATH"
    echo "Please install Miniconda or Anaconda first:"
    echo "  https://docs.conda.io/en/latest/miniconda.html"
    exit 1
fi

echo "✓ Conda found: $(conda --version)"
echo ""

# Check if environment already exists
ENV_NAME="sl-voiceid"
if conda env list | grep -q "^${ENV_NAME} "; then
    echo "⚠️  Environment '${ENV_NAME}' already exists"
    read -p "Do you want to remove and recreate it? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Removing existing environment..."
        conda env remove -n ${ENV_NAME} -y
    else
        echo "Aborting setup."
        exit 0
    fi
fi

echo "Creating Conda environment from environment.yml..."
conda env create -f environment.yml

echo ""
echo "=========================================="
echo "✓ Environment created successfully!"
echo "=========================================="
echo ""
echo "To activate the environment, run:"
echo "  conda activate ${ENV_NAME}"
echo ""
echo "After activation, install Node.js dependencies:"
echo "  npm install"
echo ""
echo "Then start the development server:"
echo "  npm run dev"
echo ""
echo "=========================================="
