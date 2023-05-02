import { createSlice } from '@reduxjs/toolkit';
import dragon from '../../components/assets/dragon.jpg';

const initialState = {
  dragon: [
    {
      id: 1,
      name: 'Dragon 1',
      type: 'capsule',
      description: 'Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).',
      flickr_images: dragon,
    },
    {
      id: 1,
      name: 'Dragon 2',
      type: 'capsule2',
      description: 'Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).',
      flickr_images: dragon,
    },
    {
      id: 1,
      name: 'Dragon 3',
      type: 'capsule 3',
      description: 'Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).',
      flickr_images: dragon,
    },
    {
      id: 1,
      name: 'Dragon 4',
      type: 'capsule 4',
      description: 'Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).',
      flickr_images: dragon,
    },
  ],
};

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    addDragons: {},
  },
});

export const { addDragons } = dragonsSlice.actions;
export default dragonsSlice.reducer;
