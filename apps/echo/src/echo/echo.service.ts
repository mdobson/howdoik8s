import { Injectable } from '@nestjs/common';
import { EchoResponse } from '../contracts/echo_response';
import { Request } from 'express';

@Injectable()
export class EchoService {
  public getRequestInfo(req: Request): EchoResponse {
    const res = new EchoResponse();
    res.headers = req.headers;
    res.method = req.method;
    res.path = req.path;

    if (req.body) {
      res.body = req.body;
    }

    return res;
  }
}
