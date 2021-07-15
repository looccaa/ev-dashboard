import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { KeyValue } from '../../../types/GlobalType';
import { LogAction } from '../../../types/Log';
import { Utils } from '../../../utils/Utils';
import { DialogTableDataComponent } from '../dialog-table-data.component';
import { LOG_ACTIONSDialogTableDataSource } from './log-actions-dialog-table-data-source';

@Component({
  templateUrl: '../dialog-table-data.component.html',
})
export class LOG_ACTIONSDialogComponent extends DialogTableDataComponent<LogAction> {
  public constructor(
    protected dialogRef: MatDialogRef<LOG_ACTIONSDialogComponent>,
    private LOG_ACTIONSDialogTableDataSource: LOG_ACTIONSDialogTableDataSource,
    @Inject(MAT_DIALOG_DATA) data: any) {
    super(data, dialogRef, LOG_ACTIONSDialogTableDataSource);
    // Default title
    if (Utils.isEmptyString(this.title)) {
      this.title = 'logs.select_actions';
    }
    this.LOG_ACTIONSDialogTableDataSource.destroyDataSource();
  }

  public getSelectedItems(selectedRows: LogAction[]): KeyValue[] {
    const items: KeyValue[] = [];
    if (!Utils.isEmptyArray(selectedRows)) {
      selectedRows.forEach((row) => {
        items.push({
          key: row.id.toString(),
          value: `${row.action}`, objectRef: row
        });
      });
    }
    return items;
  }
}
