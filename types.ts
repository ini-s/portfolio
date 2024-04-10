type Base = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
};

export interface ProjectProps extends Base {
	name: string;
	image: Image;
	title: string;
	liveURL: string;
	githubLink: string;
	languages: Languages[];
}

export interface Image {
	_type: "image";
	asset: {
		_type: "reference";
		_ref: string;
	};
}

interface Languages extends Base {
	stackImage: Image;
	title: string;
}
