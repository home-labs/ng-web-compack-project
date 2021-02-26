# NgMatcheck

## Requirements

>- @angular/common, @angular/core, @angular/cdk, @angular/material, and @angular/forms 5 or higher;
>- @actjs.on/ng-cool-filter-pipe 1 or higher.

## Installing

	$ npm i @actjs.on/ng-matcheck --save

## API reference

### Usage

Include the module into `imports` metadata key of `NgModule` decorator in your application, importing `NgMatcheckModule` from `@actjs.on/ng-matcheck`, like that.

```typescript
import { NgMatcheckModule } from '@actjs.on/ng-matcheck';

@NgModule({
    imports: [
        NgMatcheckModule
    ]
})
export class MyModule() { }
```

### Directives

Selector: `lib-mat-checkbox-group`
Exported as:  `NgMatcheck.MatCheckboxGroupComponent`

#### Properties

|Name|Description|
|--|--|
|@Input()<br/>parent: [ThisType\<T>](https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypet)||
|@Input()<br/>form: [FormGroup](https://angular.io/api/forms/FormGroup) \| [NgForm](https://angular.io/api/forms/NgForm)||
|@Input()<br/>ngClass: any|[Angular NgClass Direcrive](https://angular.io/api/common/NgClass)||
|@Input()<br/>objectCollection: object[]|
|@Input()<br/>property: string|Property name of an object of the collection defined in `objectCollection`. That is optional, but if you don't define it you'll have to define `formProperty`.|
|@Input()<br/>formProperty: string|Optional. If it's not define, it'll receive the `property` value.|
|@Input()<br/>filterTerm: string|Optional. A term of string type to filter objects defined in `objectCollection`, by `propertyLabel`.|
|@Input()<br/>propertyLabel: string||
|@Input()<br/>callbackDeclarationOfDisabledProperty: ((matCheckbox: [MatCheckbox](https://material.angular.io/components/checkbox/api#MatCheckbox)) => boolean)|Optional.|

