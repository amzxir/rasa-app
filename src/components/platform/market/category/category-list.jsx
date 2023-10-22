import React, { useContext, useState , useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import axios from "axios";
import LightStyles from "../../../../assets/sass/light/market/category-list.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/category-list.module.scss";
import ColorModeContext from "../../../../context/color-mode-context";


export default function CategoryList() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode, token } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch category all

  useEffect(() => {

    const handelCategoryAll = async () => {

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
      const bodyParameters = {
        key: "value",
      }

      try {
        const response = await axios.post('https://rasadent.reshe.ir/api/AllCategory', bodyParameters, config);
        setCategory(response.data.categories)
        // console.log(response.data.categories);
      } catch (error) {
        console.error(error);
      }

    }

    handelCategoryAll();
  }, [])

  // start fetch category all 

  // start fetch data category list 
  const [category, setCategory] = useState([]);
  // end fetch data category list 


  return (
    <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }} fadeProps={{ enterOpacity: 0.85, }}>
      <Box sx={{ mt: 5, mb: 5 }}>
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} container spacing={2}>
          {category?.map((i, index) => {
            return (
              <Grid item key={i.id} xs={3}>
                <NavLink to={`/shop/product-category/${i.name}`} state={i.name} className={theme.palette.mode === "light" ? LightStyles.category_list : DarkStyles.category_list}>
                  <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                    <img src={`https://rasadent.com/storage/category/${i.img}`} alt="" />
                  </div>
                  <h1>{i.name}</h1>
                </NavLink>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </FadeTransform>
  );
}
