from flask import Flask, request, jsonify

from BE.handlers.xlsx_handler import ret_row

from flask_cors import CORS


app = Flask(__name__)
CORS(app)
print("listening to port 5000")


@app.route('/', methods=['POST'])
def hello_world():
    if 'file' not in request.files:
        print('No file part')
        return 'No file part', 400

    file = request.files['file']

    if file.filename == '':
        print('No selected file')
        return 'No selected file', 400

    if file:
        print(file)
        file.save('./{}'.format('Export_1_2022.xls'))
        data = ret_row(file, 'Export_1_2022.xls')
        print(jsonify(data))
        return jsonify(data), 200


if __name__ == '__main__':
    app.run(debug=True)
