from sqlalchemy import create_engine, Engine, URL

from src.util import settings

class DatabaseConnection:
    connection: Engine

    @staticmethod
    def connect():
        DatabaseConnection.connection = create_engine(
            URL.create(
                settings.get('db.dialect'),
                settings.get('db.username'),
                settings.get('db.password'),
                settings.get('db.host'),
                settings.get('db.port'),
                settings.get('db.database'),
            )
        )