import { all } from "redux-saga/effects"

import { maincategorySaga } from "./MaincategorySaga"
import { subcategorySaga } from "./SubcategorySaga"
import { BrandSaga } from "./BrandSaga"
import { ProductSaga } from "./ProductSaga"
import { UserSaga } from "./UserSaga"
import { CartSaga } from "./CartSaga"
import { WishlistSaga } from "./WishlistSaga"

export default function* RootSaga() {
    yield all(
        [
            maincategorySaga(),
            subcategorySaga(),
            BrandSaga(),
            ProductSaga(),
            UserSaga(),
            CartSaga(),
            WishlistSaga()
        ]
    )
}