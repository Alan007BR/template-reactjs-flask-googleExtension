from flask import Flask

app = Flask(__name__, static_folder="../frontend/build", static_url_path='')

#nossa rota
@app.route('/hello')

def helloFlask():
    message = "hello world from Flask"
    return {'message': message}