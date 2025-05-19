import mysql.connector

try:
    conexao = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",        # XAMPP por padrão usa senha vazia
        database="registro_ocorrencias" # nome do banco criado no phpMyAdmin
    )

    if conexao.is_connected():
        print("Conexão bem-sucedida com o banco de dados!")

except mysql.connector.Error as erro:
    print(f"Erro ao conectar: {erro}")







