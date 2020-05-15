import React from "react";
import { connect, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

import { fetchBeer } from "./beerSlice";

const mapDispatchToProps = { fetchBeer };
const mapStateToProps = (state) => ({
  beer: state.beer,
});

export function BeerList({ foodType, beer }) {
  const [fetchData, setFetchData] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (fetchData) {
      dispatch(fetchBeer(foodType));
      setFetchData(false);
    }
  }, [fetchBeer, foodType, fetchData]);

  console.log({ beer });

  return (
    <div>
      <Button onClick={() => setFetchData(true)}>Fetch Beer</Button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
