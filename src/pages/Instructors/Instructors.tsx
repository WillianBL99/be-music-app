/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import InstructorPlans from '../../components/InstructorPlans';
import { Instructor } from '../../components/PlansComponents/Plan/Plan';
import useHeader from '../../hooks/useHeader';

export interface IstructorPageData {
	isOwner: boolean;
	instructor: Instructor;
}

function Instructors() {
	const { setHeaderInstructor } = useHeader();
	const { isOwner, instructor } = useLocation().state as IstructorPageData;
	const { setCurrentPage } = useHeader();
	const { instructorId } = useParams();
	setCurrentPage('instructors');

	if (!instructorId) {
		return <div>No instructor id</div>;
	}

	console.log({ instructor, isOwner });

	useEffect(() => {
		setHeaderInstructor(instructor);
	}, []);

	return (
		<InstructorPlans isOwner={isOwner} instructorId={parseInt(instructorId)} />
	);
}

export default Instructors;
