import { ChangeDetectionStrategy, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';

import { TemplateHeaderDirective } from './template-header.directive';

const constants = {
  PAGE_SIZE: 10,
  TEMPLATE: {
    header: 'header',
    body: 'body',
  },
};

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  public TEMPLATE = constants.TEMPLATE;

  @Input() cols = [];
  @Input() data: any[] = [];
  @Input() pageSize = constants.PAGE_SIZE;

  page = 0;
  items: any[] = [];
  pageData = {} as {
    start: number;
    end: number;
  };

  @ContentChildren(TemplateHeaderDirective, { read: TemplateHeaderDirective })
  public templates: QueryList<TemplateHeaderDirective>;

  constructor() {}

  ngOnInit(): void {
    this.initPagination();
  }

  get tableHeight() {
    const columnHeight = 40;
    const rowHeight = 40;
    const marginBottom = 20;

    return {
      height: `${(rowHeight + marginBottom) * this.pageSize + columnHeight}px`,
    };
  }

  private initPagination(): void {
    this.paginate(this.page, this.pageSize);
  }

  get size(): number {
    return this.data.length;
  }

  get totalPagse(): number {
    return Math.ceil(this.size / this.pageSize);
  }

  private paginate(page: number, pageSize: number): void {
    const startPortion = page * pageSize;
    let endPortion = startPortion + pageSize;

    if (endPortion > this.size) {
      endPortion -= endPortion - this.size;
    }

    this.saveCalculatetPortion(startPortion, endPortion);

    this.items = [...this.data.slice(startPortion, endPortion)];
  }

  private saveCalculatetPortion(start: number, end: number) {
    this.pageData = {
      ...this.pageData,
      start,
      end,
    };
  }

  prev(): void {
    if (this.page > 0) {
      this.page -= 1;
      this.paginate(this.page, this.pageSize);
    }
  }

  next(): void {
    if (this.page < this.totalPagse && this.pageData.end < this.size) {
      this.page += 1;
      this.paginate(this.page, this.pageSize);
    }
  }
}
