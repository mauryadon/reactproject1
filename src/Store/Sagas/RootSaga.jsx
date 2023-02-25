import { all } from "redux-saga/effects"

import { maincategorySaga } from "./MaincategorySaga"
import { subcategorySaga } from "./SubcategorySaga"
import { BrandSaga } from "./BrandSaga"
import { ProductSaga } from "./ProductSaga"
import { UserSaga } from "./UserSaga"
import { CartSaga } from "./CartSaga"
import { WishlistSaga } from "./WishlistSaga"
import { CheckoutSaga } from "./CheckoutSaga"
import { ContactSaga } from "./ContactSaga"
import { NewslatterSaga } from "./NewslatterSaga"

export default function* RootSaga() {
    yield all(
        [
            maincategorySaga(),
            subcategorySaga(),
            BrandSaga(),
            ProductSaga(),
            UserSaga(),
            CartSaga(),
            WishlistSaga(),
            CheckoutSaga(),
            ContactSaga(),
            NewslatterSaga()
        ]
    )
}