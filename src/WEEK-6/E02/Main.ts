import { Movie } from "./Movie";
import { Input } from "./Input";
import { SelectChoice, Choice } from "./Input";
import { v4 as uuidv4 } from "uuid";
import { ActionMovie } from "./ActionMovie";
import { HorrorMovie } from "./HorrorMovie";

export class Main {
  movies: Movie[] = [];
  count: number = 0;
  choices: SelectChoice[] = [
    { option: 1, message: "Add Action Movie" },
    { option: 2, message: "Add Horror Movie" },
    { option: 3, message: "Show Action Movies" },
    { option: 4, message: "Show Horror Movies" },
    { option: 5, message: "Increment Explosions In Movie" },
    { option: 6, message: "Increment Jump Scares In Movie" },
    { option: 0, message: "Exit" },
  ];

  formAction = [
    { name: "name", message: "Name" },
    { name: "director", message: "Director" },
    { name: "language", message: "Language" },
    { name: "runningTime", message: "Running Time(min)" },
    { name: "releaseYear", message: "Year" },
    { name: "explotion", message: "Explosions Count" },
  ];

  formHorror = [
    { name: "name", message: "Name" },
    { name: "director", message: "Director" },
    { name: "language", message: "Language" },
    { name: "runningTime", message: "Running Time(min)" },
    { name: "releaseYear", message: "Year" },
    { name: "jumpScares", message: "JumpScares Scares Count" },
  ];

  async start() {
    let opt = 0;
    do {
      opt = (await Input.getSelect("Blockbuster", this.choices)).data;
      console.clear();
      switch (opt) {
        case 1: {
          let {
            name,
            director,
            language,
            runningTime,
            releaseYear,
            explotion,
          } = (await Input.getForm("Fill the following", this.formAction)).data;
          let gun: boolean = await (
            await Input.getConfirm("Are there guns in this movie?")
          ).data;
          let art: boolean = await (
            await Input.getConfirm("Are there Martial Arts in this movie?")
          ).data;

          this.movies.push(
            new ActionMovie(
              uuidv4(),
              name,
              director,
              language,
              (runningTime = 0),
              releaseYear,
              explotion,
              gun,
              art
            )
          );
          break;
        }
        case 2: {
          let {
            name,
            director,
            language,
            runningTime,
            releaseYear,
            jumpScares,
          } = (await Input.getForm("Fill the following", this.formHorror)).data;
          let ghost: boolean = await (
            await Input.getConfirm("Are there Ghosts in this movie?")
          ).data;
          let vision: boolean = await (
            await Input.getConfirm("Are there Visions in this movie?")
          ).data;

          this.movies.push(
            new HorrorMovie(
              uuidv4(),
              name,
              director,
              language,
              (runningTime = 0),
              releaseYear,
              jumpScares,
              ghost,
              vision
            )
          );

          break;
        }
        case 3: {
          this.movies
            .filter((e) => e instanceof ActionMovie)
            .forEach((e) => {
              if (e instanceof ActionMovie) e.printActionMovie();
            });
          break;
        }
        case 4: {
          this.movies
            .filter((e) => e instanceof HorrorMovie)
            .forEach((e) => {
              if (e instanceof HorrorMovie) e.printHorrorMovie();
            });
          break;
        }
        case 5: {
          let selectByIdChoices: Choice[] = [];
          let actions: ActionMovie[] = [];

          this.movies
            .filter((e) => e instanceof ActionMovie)
            .forEach((e) => {
              if (e instanceof ActionMovie) {
                selectByIdChoices.push({ name: e.id, message: e.name });
                actions.push(e);
              }
            });

          let uid = await (
            await Input.getSelectById("Select Action Movie", selectByIdChoices)
          ).data;

          actions
            .filter((e) => e.id === uid)
            .forEach((e) => e.incrementExplosions());
          break;
        }
        case 6: {
          let selectByIdChoices: Choice[] = [];
          let horrors: HorrorMovie[] = [];
          this.movies
            .filter((e) => e instanceof HorrorMovie)
            .forEach((e) => {
              if (e instanceof HorrorMovie) {
                selectByIdChoices.push({ name: e.id, message: e.name });
                horrors.push(e);
              }
            });

          let uid = await (
            await Input.getSelectById("Select Horror Movie", selectByIdChoices)
          ).data;

          horrors
            .filter((e) => e.id === uid)
            .forEach((e) => e.incrementJumpscares());
          break;
        }
      }
    } while (opt != 0);
  }
}
