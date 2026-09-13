"""Ponto de entrada inicial da aplicação."""

from .match import calcular_match

def buscar_match(cachorro: dict, preferencia: dict) -> dict:
    return {
        "match": calcular_match(cachorro, preferencia)
    }
