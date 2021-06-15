import ReactFullpage from "@fullpage/react-fullpage";

const FullPageHolder = () => {
	return (
		<ReactFullpage
			scrollingSpeed={500}
			render={() => {
				return (
					<ReactFullpage.Wrapper>
						<div className="section">
							<p>Section 1</p>
						</div>
						<div className="section">
							<p>Section 2</p>
						</div>
					</ReactFullpage.Wrapper>
				);
			}}
		/>
	);
};

export default FullPageHolder;
