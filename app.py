from flask import Flask, render_template, request, jsonify

    app = Flask(__name__, static_folder='static', template_folder='static')

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/start_bot', methods=['POST'])
    def start_bot():
        data = request.json
        proxy = data.get('proxy')
        twitch_username = data.get('twitch_username')
        viewer_count = data.get('viewer_count')

        # Log the received data
        print(f"Starting bot with proxy: {proxy}, Twitch username: {twitch_username}, Viewer count: {viewer_count}")

        # Simulate bot action
        return jsonify({"message": f"Bot successfully started with proxy: {proxy}, Twitch username: {twitch_username}, Viewer count: {viewer_count}"})

    if __name__ == '__main__':
        app.run(debug=True)
