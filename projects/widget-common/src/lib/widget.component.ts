import {
  ChartTypes,
  ItemSingle,
  SiteTheme,
  VALUE_TYPE,
  WidgetItem,
  WidgetParams,
  WidgetSize
} from './widget.interface';

export const _ = (str: string) => str;

export class WidgetComponent {

  media: any;

  onInit() {
  }

  onDestroy() {
  }

  onResize(width, height) {
  }

  onUpdate(values) {
  }

}


export class WidgetComponentContainer {

  values: any;
  pictureId: number;

  readonly CHART_TYPES = ChartTypes;
  readonly VALUE_TYPE = VALUE_TYPE;


  urlExport(): string {
    return '';
  }

  paramCancel(par: WidgetItem) {
  }

  paramEdit(par: WidgetItem) {
  }

  paramSave(par: WidgetItem) {
  }

  getIconUrl(par: WidgetItem): string {
    return '';
  }

}


export interface WidgetPackage {
  template: string;
  component: WidgetComponent;
  params: WidgetParams;
  size: WidgetSize;
  styles: string;
  locales?: { code: string, file: string }[];
  needPicture?: boolean;
}

