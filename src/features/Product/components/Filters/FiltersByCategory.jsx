import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import categoryApi from '../../../../api/categoryApi';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    '& > li': {
        marginTop: theme.spacing(1),
        transition: 'all .25s',
      '&:hover': {
          cursor: 'pointer',
          color: theme.palette.primary.main,
      },
    },
  },
}));
FiltersByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FiltersByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
        console.log(categoryList);
      } catch (error) {
        console.log('Failed to fetch category: ', error);
      }
    })();
  }, []);

  const handleCategoryOnClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };
  
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Danh mục sản phẩm</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryOnClick(category)}>
            <Typography variant="body2"> {category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FiltersByCategory;
