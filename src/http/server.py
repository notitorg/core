from flask import Flask

from src.util import settings

class HttpServer:
    def __init__(self):
        self.app = Flask(settings.get('app.name'))

    def _register_all_endpoints():
        pass

    def run(self):
        self.app.run(
            settings.get('api.host'),
            settings.get('api.port'),
            settings.get('api.environment') == 'development',
        )