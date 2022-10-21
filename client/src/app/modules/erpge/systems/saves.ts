// export function loadSettings() {
//   let success = false;
//   if (GetIEVersion() == 0) {
//     // if (localStorage["CoC_Main"] == undefined) return success
//     if (store.state.liveData.storage.get('CoC_Main') == undefined) return success;
//   } else {
//     return false;
//   }
//   // let saveData = JSON.parse(localStorage["CoC_Main"])
//   const saveData = JSON.parse(store.state.liveData.storage.get('CoC_Main'));
//   try {
//     store.state.liveData.silly = saveData.silly;
//     store.state.liveData.use12Hours = saveData.use12Hours;

//     store.state.liveData.mainFont = saveData.mainFont;
//     store.state.liveData.mainFontSizeIndex = saveData.mainFontSizeIndex;
//     applyFontSettings();
//     //Set load to successful
//     success = true;
//   } catch (error) {
//     console.error(error);
//     success = false;
//   }
//   return success;
// }

export {};
