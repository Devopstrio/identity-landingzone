from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, tenants, directories, federation, security, compliance, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(tenants.router, prefix="/tenants", tags=["tenants"])
api_router.include_router(directories.router, prefix="/directories", tags=["directories"])
api_router.include_router(federation.router, prefix="/federation", tags=["federation"])
api_router.include_router(security.router, prefix="/security", tags=["security"])
api_router.include_router(compliance.router, prefix="/compliance", tags=["compliance"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
