from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    print("listening to port 5000")
    return 'Hello, World!'


if __name__ == '__main__':
    app.run()
