import json
import os
import pathlib

def get(key: str) -> str:
    if __get_all_settings()[key] is None:
        raise f'Setting not found'
    else:
        return __get_all_settings()[key]

def __get_all_settings() -> dict:
    return json.loads(open(os.path.join(os.getcwd(), 'settings.json')).read())