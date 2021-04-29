import Serial from "../data/serial"

export default class serialController {
	
	static getSerial(req, res) {
		return res.status(201).json({
			count: Serial.length,
			message: "List of Serial Inputs",
			Serial: Serial
		});
	}

	// add a new serial with unique id
	
	static addSerial(req, res) {
		const newId = parseInt(Serial.length) + 1;

		const { speed, direction, acc, angle } = req.body;

		const newSerial = {
			id: newId,
			speed,
			direction,
			acc,
			angle,
			addedAt: newDate()
		};

		Serial.push(newSerial);

		return res.status(201).json({
			message: "A new serial input has been added",
			data: {id: newId, speed, direction, acc, angle}
		});
	}
}
