// Dependencies //
require('dotenv').config();
const PORT = process.env.PORT;

// Main Code //
class Server {
	#app;
	#port;

	constructor(app = undefined){
		this.#app = app;
		this.#port = PORT;
	}

	start(){
		this.#app.listen(this.#port, () => {
			try{
				// adicionar coisas aqui para testar o server depois
				console.log("app running on port " + this.#port);
			} catch (error) {
				console.log("FATAL ERROR IN APP:");
				console.log(error);
				console.log("STOPPING SERVER NOW");
				this.#app.close();
			}
		});
	}

	stop(){
		try{
			this.#app.close();
			console.log("Server stopped successfully");
		} catch (error){
			console.log("ERROR IN METHOD, CAN'T STOP THE SERVER:");
			console.log(error);
		}
	}
}

module.exports = Server;
