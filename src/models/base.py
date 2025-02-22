from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

class BaseModel(DeclarativeBase):
    id: Mapped[int] = mapped_column(primary_key=True)