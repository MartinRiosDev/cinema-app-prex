import { Movie } from "./models/movie.model";

export const defaultMovies: Movie[] = [
	{
		title: 'Batman Dark Knight Returns: Part 1',
		description: 'Test description for this movie',
		rate: 1,
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKoqTyKZ0jUgEN5Zo2FmwLw_Dgh321qhmiw&s',
		id: 1,
		date: '25/09/2012'
	},
	{
		title: 'Batman Dark Knight Returns: Part 2',
		description: 'Test description for this movie',
		rate: 2,
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7i-4JVw5rATDIlp3S1-JJv4H3tw_HsayUQ&s',
		id: 2,
		date: '29/01/2013'
	},
	{
		title: 'Justice League Dark: Apokolips War',
		description: 'Test description for this movie',
		rate: 3,
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGD45FqVPqXL9aMD6mUzPRIdcL0IwDw337yw&s',
		id: 3,
		date: '05/05/2020'
	},
	{
		title: 'Justice League: Flashpoint Paradox',
		description: 'Test description for this movie',
		rate: 4,
		image: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Justice_League_-_The_Flashpoint_Paradox.jpg',
		id: 4,
		date: '30/07/2013'
	},
	{
		title: 'Batman: Under the Red Hood',
		description: 'Test description for this movie',
		rate: 5,
		image: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Batman_under_the_red_hood_poster.jpg',
		id: 5,
		date: '27/07/2010'
	}
];

export const regEx = {
	email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\s*)$/
};
