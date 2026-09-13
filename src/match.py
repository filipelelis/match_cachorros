"""Regras iniciais de match do projeto Match Cachorros."""

def validar_cachorro(cachorro: dict) -> bool:
    """Valida os campos mínimos de um cachorro."""
    obrigatorios = ("nome", "idade", "porte")
    return all(campo in cachorro and cachorro[campo] not in (None, "") for campo in obrigatorios)

def calcular_match(cachorro: dict, preferencia: dict) -> bool:
    """Retorna True quando as preferências mínimas são compatíveis."""
    if not validar_cachorro(cachorro):
        return False

    porte_ok = (
        not preferencia.get("porte")
        or cachorro["porte"].lower() == preferencia["porte"].lower()
    )
    idade_max = preferencia.get("idade_max")
    idade_ok = idade_max is None or cachorro["idade"] <= idade_max
    return porte_ok and idade_ok
