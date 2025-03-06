# Summary of Modern Best Practices

| **Legacy**                 | **Modern**                       |
| -------------------------- | -------------------------------- |
| ActionReducerMap           | createFeature                    |
| StoreModule.forFeature()   | provideState()                   |
| EffectsModule.forFeature() | provideEffects()                 |
| createFeatureSelector()    | createFeature's selectors        |
| createSelector()           | Still used for derived selectors |
