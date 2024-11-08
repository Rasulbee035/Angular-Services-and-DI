import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn:'root'
    }
)
export class LoggerService {

    logMesage(name: string, status: string) {
        console.log(`A new user is adde with name ${name} and with status has ${status}`)
    }
}