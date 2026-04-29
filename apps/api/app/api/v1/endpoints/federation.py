from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_federation():
    return {'status': 'ok'}
