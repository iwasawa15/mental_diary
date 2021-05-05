import { Status } from "../types/diary";

export const faceIcon = (status: Status): string => {
	switch(status) {
		case Status.happy:
			return "laughing"
		case Status.good:
			return "smiley"
		case Status.soso:
			return "slightly_smiling_face"
		case Status.sad:
			return "cry"
		case Status.tired:
			return "cold_sweat"
		case Status.exhausted:
			return "tired_face"
		case Status.worst:
			return "face_vomiting"
	}
}