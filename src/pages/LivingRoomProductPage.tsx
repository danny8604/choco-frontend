import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../app/api";

const LivingRoomProductPage = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  console.log(data);
  console.log("error", error);
  console.log("isLoading", isLoading);
  const params = useParams();
  console.log(params);
  return (
    <main>
      <p>dqwdwq</p>
      <p>dqwdwq</p>
      <p>dqwdwq</p>
      <p>dqwdwq</p>
      <p>dqwdwq</p>
      <p>dqwdwq</p>
      <p>dqwdwq</p>
      {data && <img src={data.sprites.front_default} alt="fefe" />}
      {data && <img src={data.sprites.front_shiny} alt="fefe" />}
      {data && <img src={data.sprites.back_default} alt="fefe" />}
      {data && <img src={data.sprites.back_shiny} alt="fefe" />}
      {data && <img src={data.sprites.front_default} alt="fefe" />}
      {data && <img src={data.sprites.front_shiny} alt="fefe" />}
      {data && <img src={data.sprites.back_default} alt="fefe" />}
      {data && <img src={data.sprites.back_shiny} alt="fefe" />}
      {data && <img src={data.sprites.front_default} alt="fefe" />}
      {data && <img src={data.sprites.front_shiny} alt="fefe" />}
      {data && <img src={data.sprites.back_default} alt="fefe" />}
      {data && <img src={data.sprites.back_shiny} alt="fefe" />}
    </main>
  );
};

export default LivingRoomProductPage;
