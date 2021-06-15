import ReactFullpage from "@fullpage/react-fullpage";
import Intro from "./Intro";
import WorkExperience from "./WorkExperience";

const FullPageHolder = () => {
	return (
		<ReactFullpage
			scrollingSpeed={500}
			render={() => {
				return (
					<ReactFullpage.Wrapper>
						<Intro />
						<WorkExperience />
					</ReactFullpage.Wrapper>
				);
			}}
		/>
	);
};

export default FullPageHolder;
