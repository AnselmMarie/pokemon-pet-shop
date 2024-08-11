export const modifyPhotosUtil = async (photoArr: any) => {
  const length = photoArr?.length;
  const photos: any = [];

  for (let loop = 0; loop < length; loop++) {
    const curPhoto = photoArr[loop];
    const fileSplit = curPhoto.uri.split('/');
    const fileName = `${Date.now()}_${fileSplit[fileSplit.length - 1]}`;

    photos.push({
      fileName: fileName,
      ...curPhoto,
      filePhoto: {
        uri: curPhoto.uri,
        name: fileName,
        type: curPhoto.mimeType,
      },
    });
  }

  return photos;
};
