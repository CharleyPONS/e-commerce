import {Schema} from "@tsed/mongoose";
import {IdDb} from "../../../core/models/enum/id-db.enum";
import {Property, Required} from "@tsed/schema";

@Schema({
    connection: IdDb.SHOP_DATABASE
})
export class UserAddressSchema {
    @Required()
    @Property()
    town: string;

    @Required()
    @Property()
    street: string;

    @Required()
    @Property()
    numberStreet: number;

    @Required()
    @Property()
    postalCode: number;

    @Required()
    @Property()
    country: string

}
