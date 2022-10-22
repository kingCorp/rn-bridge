//
//  Device.m
//  bridge
//
//  Created by Attasiem on 09/10/2022.
//

#import <Foundation/Foundation.h>
#import "Device.h"
#import <UIKit/UIKit.h>
#import <React/RCTLog.h>

@implementation Device

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getDeviceName:(RCTResponseSenderBlock)callback){
  @try{
    NSString *deviceName = [[UIDevice currentDevice] name];
    callback(@[[NSNull null], deviceName]);
  }
  @catch(NSException *exception){
    callback(@[exception.reason, [NSNull null]]);
  }
}

RCT_EXPORT_METHOD(createLog:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
