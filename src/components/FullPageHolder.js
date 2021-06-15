import ReactFullpage from "@fullpage/react-fullpage";
import Intro from "./Intro";

const FullPageHolder = () => {
	return (
		<ReactFullpage
			scrollingSpeed={500}
			render={() => {
				return (
					<ReactFullpage.Wrapper>
						<Intro />
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
