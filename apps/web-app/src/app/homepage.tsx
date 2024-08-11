import {
  ElementLayout,
  ElementLayoutTypeEnum,
  Typography,
  TypographyTypeEnum,
} from '@pokemon-pet-shop/ui';

import styles from './app.module.css';

const Homepage = () => {
  return (
    <div>
      <ElementLayout layoutType={ElementLayoutTypeEnum.HEADER}>
        <div className="logo" />
        <ElementLayout layoutType={ElementLayoutTypeEnum.NAV}></ElementLayout>
        <div className="shoppingIcon" />
      </ElementLayout>
      <ElementLayout className={styles?.card}>
        <ElementLayout className="hp"></ElementLayout>
        <div className="image" />
        <ElementLayout>
          <ElementLayout>
            <ElementLayout>
              <Typography typographyType={TypographyTypeEnum.H4}>Basic Pokemon</Typography>
              <Typography typographyType={TypographyTypeEnum.H4}>NO. 001</Typography>
            </ElementLayout>
            <Typography typographyType={TypographyTypeEnum.H1}>Bulbasaur</Typography>
          </ElementLayout>

          <ElementLayout>
            <ElementLayout></ElementLayout>
            <Typography>Razor Wind</Typography>
          </ElementLayout>

          <ElementLayout>
            <Typography>Get Pet</Typography>
            <Typography>Details</Typography>
          </ElementLayout>
        </ElementLayout>
      </ElementLayout>
      <div>footer</div>
    </div>
  );
};

export default Homepage;
