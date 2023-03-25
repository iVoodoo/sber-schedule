import { Row } from "@salutejs/plasma-ui"
import {
	Badge,
	Button,
	Card,
	CardBody,
	CardContent,
	CardMedia,
	CardParagraph1,
	TextBox,
	TextBoxBigTitle,
	TextBoxSubTitle,
	TextField,
} from "@sberdevices/plasma-ui"
import React from "react"
import * as ReactDOM from "react-dom"
import { createRoot } from "react-dom"
//import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { FieldContent, TextFieldInput } from "@sberdevices/plasma-core"

let read_json = () => {
	try {
		const data = require("../data/data.json")
		return data
	} catch (error) {
		console.log("Unable to read the file:\n" + String(error))
	}
}

let get_schedule_json = group => {
	let all_schedule_json = read_json().contents
	let group_numbers = Object.keys(all_schedule_json)
	if (group_numbers.includes(group)) {
		return all_schedule_json[group]
	} else {
		console.log("Invalid group number. Check your code.\n")
		return null
	}
}
// function App() {

//     const commands = [
//         {
//             command: 'show',
//             callback: () => {

//             }
//         },
//     ]

//     const { transcript } = useSpeechRecognition({ commands })
//     console.log(transcript)

//     const listen = () => {
//         SpeechRecognition.startListening({ continuous: true })

//     }

// }

function handleClick(e) {
	e.preventDefault()

	for (let index = 1; index < 7; index++) {
		document.getElementById(`schedul_area_${index}`).innerHTML = ""
	}

	console.log(
		get_schedule_json(document.getElementById("group_num").value)["grid"]
	)

	let today = new Date().getDay()

	let day_num = 0

	if (today == 0) {
		today = "Воскресенье"
		day_num = 7
	}
	if (today == 1) {
		today = "Понедельник"
		day_num = 1
	}
	if (today == 2) {
		today = "Вторник"
		day_num = 1
	}
	if (today == 3) {
		today = "Среда"
		day_num = 3
	}
	if (today == 4) {
		today = "Четверг"
		day_num = 4
	}
	if (today == 5) {
		today = "Пятница"
		day_num = 5
	}
	if (today == 6) {
		today = "Суббота"
		day_num = 6
	}

	const day = () => {
		return (
			<div>
				<Row style={{ marginBottom: "1rem", justifyContent: "center" }}>
					<TextBox>
						<TextBoxBigTitle>{today}</TextBoxBigTitle>
					</TextBox>
				</Row>
			</div>
		)
	}

	const lessons = lesson => {
		let time = ""
		if (lesson == 1) {
			time = "9:00 - 10:30"
		}
		if (lesson == 2) {
			time = "10:40 - 12:10"
		}
		if (lesson == 3) {
			time = "12:20 - 13:50"
		}
		if (lesson == 4) {
			time = "14:30 - 16:00"
		}
		if (lesson == 5) {
			time = "16:10 - 17:40"
		}
		if (lesson == 6) {
			time = "17:50 - 19:20"
		}
		if (lesson == 7) {
			time = "19:30 - 21:00"
		}

		if (
			get_schedule_json(document.getElementById("group_num").value)["grid"][
				day_num
			][lesson].length == 0
		) {
			return null
		} else {
			let lesson_index = 0
			let les = get_schedule_json(document.getElementById("group_num").value)[
				"grid"
			][day_num][lesson]
			for (let index = 0; index < les.length; index++) {
				let now_date = new Date()
				let date_f = les[index]["df"].split("-")
				let date_t = les[index]["dt"].split("-")
				let df = new Date(date_f[0], date_f[1], date_f[2])
				let dt = new Date(date_t[0], date_t[1], date_t[2])
				if (df <= now_date && now_date <= dt) {
					lesson_index = index
				}
			}
			let loc = ""
			if (
				les[lesson_index]["location"].length > 0 &&
				les[lesson_index]["shortRooms"].length > 0
			) {
				loc =
					les[lesson_index]["location"] +
					", " +
					les[lesson_index]["shortRooms"][0]
			}
			if (
				les[lesson_index]["location"].length == 0 &&
				les[lesson_index]["shortRooms"].length > 0
			) {
				loc = les[lesson_index]["shortRooms"][0]
			}
			if (
				les[lesson_index]["location"].length > 0 &&
				les[lesson_index]["shortRooms"].length == 0
			) {
				loc = les[lesson_index]["location"]
			}
			return (
				<div>
					<Card style={{ width: "75vw", marginBottom: "1rem" }}>
						<CardBody>
							<CardContent>
								<TextBox>
									<Badge
										style={{ marginRight: "1.25rem" }}
										text={time}
										size="l"
									/>
									<Badge text={loc} size="l" view="secondary" />
								</TextBox>
								<TextBox>
									<TextBoxBigTitle>{les[lesson_index]["sbj"]}</TextBoxBigTitle>
									<TextBoxSubTitle>
										{les[lesson_index]["teacher"]}
									</TextBoxSubTitle>
								</TextBox>
							</CardContent>
						</CardBody>
					</Card>
				</div>
			)
		}
	}

	const elem = () => {
		// В 152 строе можно выбрать день недели для теста
		day_num = 3
		if (
			day_num == 7 ||
			(get_schedule_json(document.getElementById("group_num").value)["grid"][
				day_num
			][1].length == 0 &&
				get_schedule_json(document.getElementById("group_num").value)["grid"][
					day_num
				][2].length == 0 &&
				get_schedule_json(document.getElementById("group_num").value)["grid"][
					day_num
				][3].length == 0 &&
				get_schedule_json(document.getElementById("group_num").value)["grid"][
					day_num
				][4].length == 0 &&
				get_schedule_json(document.getElementById("group_num").value)["grid"][
					day_num
				][5].length == 0 &&
				get_schedule_json(document.getElementById("group_num").value)["grid"][
					day_num
				][6].length == 0 &&
				get_schedule_json(document.getElementById("group_num").value)["grid"][
					day_num
				][7].length == 0)
		) {
			return (
				<div>
					<Row style={{ marginBottom: "1rem", justifyContent: "center" }}>
						<TextBox>
							<TextBoxBigTitle>Сегодня нет занятий.</TextBoxBigTitle>
						</TextBox>
					</Row>
				</div>
			)
		} else {
			return (
				<div>
					<Row style={{ justifyContent: "center" }}>
						{lessons(1)}
						{lessons(2)}
						{lessons(3)}
						{lessons(4)}
						{lessons(5)}
						{lessons(6)}
						{lessons(7)}
					</Row>
				</div>
			)
		}
	}

	const output = () => {
		return (
			<div>
				{day()}
				{elem()}
			</div>
		)
	}

	const container = document.getElementById("schedul_area")
	const root = createRoot(container)
	root.render(output())
	// ReactDOM.render(output(), document.getElementById('schedul_area'));
}
function handleClick1(e) {
	e.preventDefault()

	document.getElementById("schedul_area").innerHTML = ""
	// console.log(get_schedule_json(document.getElementById('group_num').value)['grid']);

	// let today = '';

	// let day_num = 0;

	for (let day_num = 1; day_num < 7; day_num++) {
		let today = ""

		if (day_num == 7) {
			today = "Воскресенье"
		}
		if (day_num == 1) {
			today = "Понедельник"
		}
		if (day_num == 2) {
			today = "Вторник"
		}
		if (day_num == 3) {
			today = "Среда"
		}
		if (day_num == 4) {
			today = "Четверг"
		}
		if (day_num == 5) {
			today = "Пятница"
		}
		if (day_num == 6) {
			today = "Суббота"
		}

		const day = () => {
			return (
				<div>
					<Row style={{ marginBottom: "1rem", justifyContent: "center" }}>
						<TextBox>
							<TextBoxBigTitle>{today}</TextBoxBigTitle>
						</TextBox>
					</Row>
				</div>
			)
		}

		const lessons = lesson => {
			let time = ""
			if (lesson == 1) {
				time = "9:00 - 10:30"
			}
			if (lesson == 2) {
				time = "10:40 - 12:10"
			}
			if (lesson == 3) {
				time = "12:20 - 13:50"
			}
			if (lesson == 4) {
				time = "14:30 - 16:00"
			}
			if (lesson == 5) {
				time = "16:10 - 17:40"
			}
			if (lesson == 6) {
				time = "17:50 - 19:20"
			}
			if (lesson == 7) {
				time = "19:30 - 21:00"
			}

			if (
				get_schedule_json(document.getElementById("group_num").value)["grid"][
					day_num
				][lesson].length == 0
			) {
				return null
			} else {
				let lesson_index = 0
				let les = get_schedule_json(document.getElementById("group_num").value)[
					"grid"
				][day_num][lesson]
				for (let index = 0; index < les.length; index++) {
					let now_date = new Date()
					let date_f = les[index]["df"].split("-")
					let date_t = les[index]["dt"].split("-")
					let df = new Date(date_f[0], date_f[1], date_f[2])
					let dt = new Date(date_t[0], date_t[1], date_t[2])
					if (df <= now_date && now_date <= dt) {
						lesson_index = index
					}
				}
				let loc = ""
				if (
					les[lesson_index]["location"].length > 0 &&
					les[lesson_index]["shortRooms"].length > 0
				) {
					loc =
						les[lesson_index]["location"] +
						", " +
						les[lesson_index]["shortRooms"][0]
				}
				if (
					les[lesson_index]["location"].length == 0 &&
					les[lesson_index]["shortRooms"].length > 0
				) {
					loc = les[lesson_index]["shortRooms"][0]
				}
				if (
					les[lesson_index]["location"].length > 0 &&
					les[lesson_index]["shortRooms"].length == 0
				) {
					loc = les[lesson_index]["location"]
				}
				return (
					<div>
						<Card style={{ width: "75vw", marginBottom: "1rem" }}>
							<CardBody>
								<CardContent>
									<TextBox>
										<Badge
											style={{ marginRight: "1.25rem" }}
											text={time}
											size="l"
										/>
										<Badge text={loc} size="l" view="secondary" />
									</TextBox>
									<TextBox>
										<TextBoxBigTitle>
											{les[lesson_index]["sbj"]}
										</TextBoxBigTitle>
										<TextBoxSubTitle>
											{les[lesson_index]["teacher"]}
										</TextBoxSubTitle>
									</TextBox>
								</CardContent>
							</CardBody>
						</Card>
					</div>
				)
			}
		}

		const elem = () => {
			// В 152 строе можно выбрать день недели для теста
			// day_num = 3

			if (
				day_num === 7 ||
				(get_schedule_json(document.getElementById("group_num").value)["grid"][
					day_num
				][1].length === 0 &&
					get_schedule_json(document.getElementById("group_num").value)["grid"][
						day_num
					][2].length === 0 &&
					get_schedule_json(document.getElementById("group_num").value)["grid"][
						day_num
					][3].length === 0 &&
					get_schedule_json(document.getElementById("group_num").value)["grid"][
						day_num
					][4].length === 0 &&
					get_schedule_json(document.getElementById("group_num").value)["grid"][
						day_num
					][5].length === 0 &&
					get_schedule_json(document.getElementById("group_num").value)["grid"][
						day_num
					][6].length === 0 &&
					get_schedule_json(document.getElementById("group_num").value)["grid"][
						day_num
					][7].length === 0)
			) {
				return (
					<div>
						<Row style={{ marginBottom: "1rem", justifyContent: "center" }}>
							<TextBox>
								<TextBoxBigTitle>Сегодня нет занятий.</TextBoxBigTitle>
							</TextBox>
						</Row>
					</div>
				)
			} else {
				return (
					<div>
						<Row style={{ justifyContent: "center" }}>
							{lessons(1)}
							{lessons(2)}
							{lessons(3)}
							{lessons(4)}
							{lessons(5)}
							{lessons(6)}
							{lessons(7)}
						</Row>
					</div>
				)
			}
		}

		const output = () => {
			return (
				<div>
					{day()}
					{elem()}
				</div>
			)
		}

		const container = document.getElementById(`schedul_area_${day_num}`)
		const root = createRoot(container)
		root.render(output())
		// ReactDOM.render(output(), document.getElementById(`schedul_area_${day_num}`));
	}
}

const ScheduleCard = () => {
	return (
		<div>
			<form action="" onSubmit={handleClick} method="PATH">
				<Row style={{ marginBottom: "1rem", justifyContent: "center" }}>
					<TextField
						id="group_num"
						name="group_num"
						size="l"
						placeholder="Введите номер группы"
						defaultValue="201-361"
					/>
				</Row>
				<Row style={{ marginBottom: "1rem", justifyContent: "center" }}>
					<Button text="Показать расписание 2" view="primary" size="s" />
				</Row>
			</form>
			<form action="" onSubmit={handleClick1} method="PATH">
				<Row style={{ marginBottom: "1rem", justifyContent: "center" }}>
					<Button text="Показать расписание" view="primary" size="s" />
				</Row>
			</form>
			<div id="schedul_area"></div>
			<div id="schedul_area_1"></div>
			<div id="schedul_area_2"></div>
			<div id="schedul_area_3"></div>
			<div id="schedul_area_4"></div>
			<div id="schedul_area_5"></div>
			<div id="schedul_area_6"></div>
		</div>
	)
}
export default ScheduleCard
