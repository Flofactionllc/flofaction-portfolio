# Nmap Integration

## Overview
Integration of Nmap into the FloFaction system.

## Features
- network_scanning
- vulnerability_assessment
- security_auditing

## Configuration
See nmap_config.json for configuration options.

## Usage
```python
from src.integrations.nmap_integration import nmap_integration

# Initialize
await nmap_integration.initialize()

# Execute feature
result = await nmap_integration.execute_feature('feature_name', {'param': 'value'})
```

## Status
- Integration Date: 2025-09-24
- Status: Active
- Category: security
