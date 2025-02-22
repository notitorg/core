from src.models.base import BaseModel

class UserModel(BaseModel):
    __tablename__ = "user"

    def __repr__(self):
        return f'UserModel(id={self.id!r})'