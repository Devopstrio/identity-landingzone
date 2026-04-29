from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_tenants():
    return {'status': 'ok'}
