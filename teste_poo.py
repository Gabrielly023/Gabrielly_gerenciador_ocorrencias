class OcorrenciaEscolar_gabrielly:
    def __init__(self, aluno, data, descricao):
        self.aluno = aluno            
        self.data = data              
        self.__descricao = descricao 

    def exibir_ocorrencia_gabrielly(self):
        print(f"\nAluno: {self.aluno}")
        print(f"Data: {self.data}")
        print(f"Descrição: {self.__descricao}")

    def get_descricao(self):
        return self.__descricao

    def set_descricao(self, nova_descricao):
        self.__descricao = nova_descricao
        print("Descrição atualizada com sucesso!")

    def atualizar_descricao(self, nova_descricao):
        self.set_descricao(nova_descricao)

    def alterar_data(self, nova_data):
        self.data = nova_data
        print("Data da ocorrência alterada com sucesso!")

    def verificar_reincidencia(self):
        palavras_chave = ["segunda vez", "terceira vez", "reincidente"]
        descricao_lower = self.__descricao.lower()
        for palavra in palavras_chave:
            if palavra in descricao_lower:
                print("⚠️ Aluno reincidente em comportamento inadequado.")
                return True
        print("Sem sinais de reincidência registrados.")
        return False


class OcorrenciaGrave(OcorrenciaEscolar_gabrielly):
    def __init__(self, aluno, data, descricao, nivel_gravidade):
        super().__init__(aluno, data, descricao)
        self.__nivel_gravidade = nivel_gravidade

    def get_nivel_gravidade(self):
        return self.__nivel_gravidade

    def set_nivel_gravidade(self, novo_nivel):
        self.__nivel_gravidade = novo_nivel
        print("Nível de gravidade atualizado com sucesso!")

    def exibir_alerta(self):
        print("\n⚠️ ALERTA DE OCORRÊNCIA GRAVE ⚠️")
        self.exibir_ocorrencia_gabrielly()
        print(f"Nível de Gravidade: {self.__nivel_gravidade}")


# ===============================
# LOOP PARA REGISTRAR VÁRIAS OCORRÊNCIAS
# ===============================

while True:
    print("\n=== Registro de Ocorrência ===")

    aluno = input("Nome do aluno: ")
    data = input("Data da ocorrência (dd/mm/aaaa): ")
    descricao = input("Descrição da ocorrência: ")
    tipo = input("A ocorrência é grave? (s/n): ").strip().lower()

    if tipo == 's':
        nivel = input("Nível de gravidade (Alta/Média/Baixa): ")
        ocorrencia = OcorrenciaGrave(aluno, data, descricao, nivel)
        ocorrencia.exibir_alerta()
    else:
        ocorrencia = OcorrenciaEscolar_gabrielly(aluno, data, descricao)
        ocorrencia.exibir_ocorrencia_gabrielly()

    ocorrencia.verificar_reincidencia()

    atualizar_desc = input("\nDeseja atualizar a descrição? (s/n): ").strip().lower()
    if atualizar_desc == 's':
        nova_desc = input("Digite a nova descrição: ")
        ocorrencia.atualizar_descricao(nova_desc)

    atualizar_data = input("Deseja alterar a data? (s/n): ").strip().lower()
    if atualizar_data == 's':
        nova_data = input("Digite a nova data (dd/mm/aaaa): ")
        ocorrencia.alterar_data(nova_data)

    if tipo == 's':
        ocorrencia.exibir_alerta()
    else:
        ocorrencia.exibir_ocorrencia_gabrielly()

    # ✔️ Verifica se o usuário quer continuar
    continuar = input("\nDeseja registrar outra ocorrência? (s/n): ").strip().lower()
    if continuar != 's':
        print("\nEncerrando o sistema de ocorrências.")
        break



