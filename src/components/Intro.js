import React from "react";
import { Col, Row } from "react-bootstrap";

const Intro = () => {
	return (
		<div className="section">
			<Col>
				<Row className="animate__animated animate__fadeIn">
					<h1 className="text-center">Hey There! 👋</h1>
				</Row>
				<Row className="animate__animated animate__fadeIn">
					<h1 className="text-center">I am Anu Shibin Joseph Raj 🙋‍♂️</h1>
				</Row>
				<Row className="animate__animated animate__fadeIn">
					<h1 className="text-center">You can call me Shibin 😀</h1>
				</Row>
				{/* <Row className="animate__animated animate__fadeIn">
					<p className="text-center">⬇ Keep scrolling ⬇</p>
                    </Row> */}
			</Col>
		</div>
	);
};

export default Intro;
