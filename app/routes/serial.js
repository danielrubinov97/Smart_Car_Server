import serialController from "../controllers/serial";

export default (app) => {
	app.get("/api/v1/", (req, res) => 
		res.status(200).json({"Serial API": "Healthy"}))

	app.get("/api/v1/serial", serialController.getSerial);

	app.post("/api/v1/serial", serialController.addSerial);
}
