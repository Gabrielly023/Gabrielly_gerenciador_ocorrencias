import mysql.connector

conexao = mysql.connector.connect(
    host='localhost',
    user='root',
    password='',
    database='registro_ocorrencias'
)

cursor = conexao.cursor()

comando = "SELECT * FROM ocorrencias"
cursor.execute(comando)
resultado = cursor.fetchall()

for linha in resultado:
    print(linha)

conexao.close()







