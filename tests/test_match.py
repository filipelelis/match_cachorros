import unittest

from src.match import validar_cachorro, calcular_match
from src.app import buscar_match


class TestMatchCachorros(unittest.TestCase):

    def setUp(self):
        self.cachorro = {
            "nome": "Rex",
            "idade": 3,
            "porte": "medio",
        }

    def test_cachorro_com_dados_validos(self):
        self.assertTrue(validar_cachorro(self.cachorro))

    def test_cachorro_sem_nome_e_invalido(self):
        cachorro = {**self.cachorro, "nome": ""}
        self.assertFalse(validar_cachorro(cachorro))

    def test_match_quando_porte_e_compativel(self):
        preferencia = {"porte": "medio"}
        self.assertTrue(calcular_match(self.cachorro, preferencia))

    def test_nao_match_quando_porte_e_diferente(self):
        preferencia = {"porte": "grande"}
        self.assertFalse(calcular_match(self.cachorro, preferencia))

    def test_nao_match_quando_idade_ultrapassa_limite(self):
        preferencia = {"idade_max": 2}
        self.assertFalse(calcular_match(self.cachorro, preferencia))

    def test_endpoint_de_aplicacao_retorna_resultado(self):
        resultado = buscar_match(self.cachorro, {"porte": "medio", "idade_max": 5})
        self.assertEqual(resultado, {"match": True})


if __name__ == "__main__":
    unittest.main()
